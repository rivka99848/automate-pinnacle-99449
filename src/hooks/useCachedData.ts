import { useState, useEffect, useCallback } from "react";

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

const CACHE_DURATION_HOURS = 4;

// Check if page was refreshed
const isPageRefresh = (): boolean => {
  if (typeof window !== 'undefined' && window.performance) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation?.type === 'reload';
  }
  return false;
};

export function useCachedData<T>(
  cacheKey: string,
  fetchFn: () => Promise<T>,
  options?: { cacheDurationHours?: number }
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const cacheDuration = (options?.cacheDurationHours || CACHE_DURATION_HOURS) * 60 * 60 * 1000;

  const getCachedData = useCallback((): T | null => {
    try {
      const cached = localStorage.getItem(cacheKey);
      if (!cached) return null;

      const entry: CacheEntry<T> = JSON.parse(cached);
      const now = Date.now();

      // Check if cache is still valid
      if (now < entry.expiresAt) {
        return entry.data;
      }

      // Cache expired, remove it
      localStorage.removeItem(cacheKey);
      return null;
    } catch {
      localStorage.removeItem(cacheKey);
      return null;
    }
  }, [cacheKey]);

  const setCachedData = useCallback((data: T) => {
    try {
      const now = Date.now();
      const entry: CacheEntry<T> = {
        data,
        timestamp: now,
        expiresAt: now + cacheDuration,
      };
      localStorage.setItem(cacheKey, JSON.stringify(entry));
    } catch (e) {
      console.warn("Failed to cache data:", e);
    }
  }, [cacheKey, cacheDuration]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const freshData = await fetchFn();
      setData(freshData);
      setCachedData(freshData);
    } catch (e) {
      setError(e instanceof Error ? e : new Error("Failed to fetch data"));
      console.error("Fetch error:", e);
    } finally {
      setLoading(false);
    }
  }, [fetchFn, setCachedData]);

  useEffect(() => {
    const isRefresh = isPageRefresh();

    // If page was refreshed, always fetch fresh data
    if (isRefresh) {
      fetchData();
      return;
    }

    // Try to get cached data first
    const cached = getCachedData();
    if (cached) {
      setData(cached);
      setLoading(false);
      return;
    }

    // No valid cache, fetch fresh data
    fetchData();
  }, [fetchData, getCachedData]);

  const refetch = useCallback(() => {
    localStorage.removeItem(cacheKey);
    fetchData();
  }, [cacheKey, fetchData]);

  return { data, loading, error, refetch };
}
