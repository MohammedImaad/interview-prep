import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const About = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          RAG Pipeline Architecture
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how our Retrieval-Augmented Generation system transforms "Cracking the Coding Interview" 
          into an intelligent assistant for your interview preparation.
        </p>
      </div>

      {/* Technologies Used */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl text-card-foreground">Technologies Used</CardTitle>
          <CardDescription>The tech stack powering our RAG pipeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {[
              "LangChain", "SentenceTransformer", "ChromaDB", "OpenAI GPT", 
              "FastAPI", "React", "TypeScript", "Tailwind CSS"
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-sm bg-secondary/80 hover:bg-secondary transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pipeline Flowchart */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl text-card-foreground">Pipeline Flow</CardTitle>
          <CardDescription>Step-by-step process of how our system works</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 rounded-lg p-6">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4 p-4 bg-card/60 rounded-lg border border-border/30">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Knowledge Base Input</h3>
                  <p className="text-muted-foreground">
                    We start with the complete "Cracking the Coding Interview" book as our knowledge base, 
                    containing comprehensive coding interview preparation material.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-border"></div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 p-4 bg-card/60 rounded-lg border border-border/30">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Document Splitting</h3>
                  <p className="text-muted-foreground">
                    Using LangChain's RecursiveCharacterTextSplitter, we break down the book into 
                    manageable chunks while preserving semantic meaning and context.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-border"></div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4 p-4 bg-card/60 rounded-lg border border-border/30">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Text Embedding</h3>
                  <p className="text-muted-foreground">
                    SentenceTransformer converts text chunks into high-dimensional vector representations, 
                    capturing semantic similarities between different concepts.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-border"></div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4 p-4 bg-card/60 rounded-lg border border-border/30">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Vector Storage</h3>
                  <p className="text-muted-foreground">
                    ChromaDB stores the embedded vectors in an efficient vector database, 
                    enabling fast similarity searches and retrieval operations.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-border"></div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-4 p-4 bg-card/60 rounded-lg border border-border/30">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Context Retrieval & LLM Integration</h3>
                  <p className="text-muted-foreground">
                    When you ask a question, we retrieve relevant context from the vector store 
                    and combine it with OpenAI's LLM to generate accurate, contextual answers.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-border"></div>
              </div>

              {/* Step 6 */}
              <div className="flex items-start gap-4 p-4 bg-card/60 rounded-lg border border-border/30">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">API & Frontend</h3>
                  <p className="text-muted-foreground">
                    FastAPI serves the backend endpoints, while this React frontend provides 
                    an intuitive interface for your interview preparation needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg text-card-foreground">Accurate Retrieval</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Vector similarity ensures the most relevant information is retrieved for your specific question.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg text-card-foreground">Contextual Answers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Combines retrieved context with LLM capabilities for comprehensive, accurate responses.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg text-card-foreground">Scalable Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built with modern tools that can easily scale to handle multiple users and larger datasets.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default About