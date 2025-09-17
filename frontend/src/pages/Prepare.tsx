import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Search, Sparkles, Clock, BookOpen } from "lucide-react"

const Prepare = () => {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  // Hardcoded sample results for different types of queries
  const sampleResults = {
    "time complexity": `**Time Complexity Analysis**

Time complexity describes how the runtime of an algorithm grows as the input size increases. Here are the key concepts:

**Common Time Complexities:**
- **O(1)** - Constant time: Access array element by index
- **O(log n)** - Logarithmic: Binary search in sorted array
- **O(n)** - Linear: Single loop through array
- **O(n log n)** - Linearithmic: Merge sort, heap sort
- **O(n²)** - Quadratic: Nested loops, bubble sort
- **O(2ⁿ)** - Exponential: Recursive fibonacci (naive)

**Analysis Tips:**
1. Look for loops - each nested loop typically multiplies complexity
2. Recursive calls - analyze the recurrence relation
3. Drop constants and lower-order terms
4. Consider best, average, and worst cases

**Example:** For a nested loop iterating through an n×n matrix, the time complexity is O(n²) because you perform n operations n times.`,

    "binary search": `**Binary Search Algorithm**

Binary search is an efficient algorithm for finding a target value in a sorted array.

**Algorithm Steps:**
1. Start with left = 0, right = array.length - 1
2. While left ≤ right:
   - Calculate mid = left + (right - left) / 2
   - If array[mid] == target, return mid
   - If array[mid] < target, search right half (left = mid + 1)
   - If array[mid] > target, search left half (right = mid - 1)
3. If not found, return -1

**Time Complexity:** O(log n)
**Space Complexity:** O(1) iterative, O(log n) recursive

**Key Points:**
- Only works on sorted arrays
- Eliminates half the search space each iteration
- Much faster than linear search for large datasets
- Common in many interview problems

**Implementation:**
\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
\`\`\``,

    "default": `**Coding Interview Preparation**

Welcome to your AI-powered interview assistant! I can help you with:

**Data Structures & Algorithms:**
- Arrays, Linked Lists, Stacks, Queues
- Trees, Graphs, Hash Tables
- Sorting and Searching algorithms
- Dynamic Programming concepts

**Interview Strategies:**
- Problem-solving approaches
- Time and space complexity analysis
- Common coding patterns
- System design basics

**Practice Areas:**
- String manipulation
- Two-pointer techniques
- Recursion and backtracking
- Bit manipulation

Try asking specific questions like:
- "How do I implement a binary search?"
- "What's the time complexity of merge sort?"
- "Explain dynamic programming"
- "How to detect a cycle in a linked list?"

I'll provide detailed explanations with examples to help you ace your coding interviews!`
  }

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
   
    
    try {
      setIsLoading(true)
      const apiUrl = `http://127.0.0.1:8000/ask?query=${encodeURIComponent(query)}`;
      
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setIsLoading(false)
      console.log(data)
      setResult(data['answer'])
    } catch (err) {
      console.error(err);
    } finally {
    }
   
  }

  const handleSampleQuery = (sampleQuery: string) => {
    setQuery(sampleQuery)
  }

  const sampleQueries = [
    "What is time complexity?",
    "How does binary search work?",
    "Explain dynamic programming",
    "How to reverse a linked list?",
    "What are the best sorting algorithms?"
  ]

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Interview Preparation Assistant
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ask any coding interview question and get detailed explanations powered by "Cracking the Coding Interview"
        </p>
      </div>

      {/* Query Input */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-card-foreground">
            <Search className="w-6 h-6 text-primary" />
            Ask Your Question
          </CardTitle>
          <CardDescription>
            Enter your coding interview question below and get comprehensive answers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., How do I implement a binary search tree?"
                className="pr-12 h-12 text-lg bg-input/50 border-border/50 focus:border-primary focus:ring-primary/20"
                disabled={isLoading}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 text-lg bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow"
              disabled={isLoading || !query.trim()}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Analyzing...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Get Answer
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Sample Queries */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="text-lg text-card-foreground">Try These Sample Questions</CardTitle>
          <CardDescription>Click on any question to try it out</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {sampleQueries.map((sample, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-secondary/80"
                onClick={() => handleSampleQuery(sample)}
              >
                {sample}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-elevated animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-card-foreground">
              <BookOpen className="w-6 h-6 text-primary" />
              Answer
              <Badge variant="secondary" className="ml-auto bg-primary/10 text-primary border-primary/20">
                <Clock className="w-3 h-3 mr-1" />
                Generated by RAG
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-invert max-w-none">
              <Textarea
                value={result}
                readOnly
                className="min-h-[400px] bg-muted/30 border-border/30 text-card-foreground resize-none"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tips */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg text-card-foreground">💡 Pro Tip</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Be specific in your questions. Instead of "sorting", ask "when should I use quicksort vs mergesort?"
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg text-card-foreground">🎯 Focus Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Ask about time complexity, edge cases, and alternative approaches to deepen your understanding.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg text-card-foreground">📚 Study Method</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Use this tool to clarify concepts, then practice implementing the solutions on your own.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Prepare