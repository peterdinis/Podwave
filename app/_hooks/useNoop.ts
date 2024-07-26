"use client"

import { useCallback } from "react"

export const useNoop = () => useCallback(() => {}, []);