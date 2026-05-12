// src/data/coursesData.js

export const COURSES_DATA = {
  programming: {
    id: "course_python_01",
    title: "Core Python & Advanced Systems Engineering",
    description: "Master foundational syntax up to production-grade deployment engines.",
    chapters: [
      {
        id: "py_ch1",
        title: "The Runtime & Foundations",
        topics: [
          { id: "py_top_1.1", title: "Memory Allocation & Deep vs Shallow Copies", price: 125, duration: "45 mins" },
          { id: "py_top_1.2", title: "Dunder Methods & Object Lifecycle Engineering", price: 125, duration: "60 mins" }
        ]
      },
      {
        id: "py_ch2",
        title: "Functional Architecture & Pipelines",
        topics: [
          { id: "py_top_2.1", title: "Closures, Decorators, and Metaprogramming", price: 125, duration: "90 mins" },
          { id: "py_top_2.2", title: "High-Performance Generator Pipelines", price: 125, duration: "50 mins" }
        ]
      }
    ]
  },
  trading: {
    id: "course_trading_01",
    title: "Technical Analysis & Advanced Derivatives",
    description: "Learn professional price action analytics and quantitative risk management.",
    chapters: [
      {
        id: "tr_ch1",
        title: "Price Action & Market Psychology",
        topics: [
          { id: "tr_top_1.1", title: "Candlestick Anatomy & Volumetric Momentum", price: 125, duration: "40 mins" },
          { id: "tr_top_1.2", title: "Drawing Valid Support & Micro-Trendlines", price: 125, duration: "55 mins" }
        ]
      },
      {
        id: "tr_ch2",
        title: "Derivatives Mechanics",
        topics: [
          { id: "tr_top_2.1", title: "Call vs Put Options (Navigating Options Greeks)", price: 125, duration: "75 mins" },
          { id: "tr_top_2.2", title: "Position Sizing & Strict Drawdown Mathematics", price: 125, duration: "60 mins" }
        ]
      }
    ]
  }
};