import { BookOpen, BrainCircuit } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const items = [
  { 
    title: "About", 
    url: "/about", 
    icon: BookOpen,
    description: "Learn about the RAG pipeline"
  },
  { 
    title: "Prepare", 
    url: "/", 
    icon: BrainCircuit,
    description: "Ask coding interview questions"
  },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true
    if (path !== "/" && currentPath.startsWith(path)) return true
    return false
  }

  const getNavClass = (active: boolean) => 
    active 
      ? "bg-primary text-primary-foreground shadow-glow border border-primary/20" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground hover:text-sidebar-accent-foreground transition-all duration-300"

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-sidebar-border bg-sidebar transition-all duration-300`}>
      <SidebarContent className="p-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <BrainCircuit className="w-5 h-5 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold text-sidebar-foreground">CodePrep AI</h1>
                <p className="text-xs text-sidebar-foreground/60">Interview Assistant</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80 text-xs font-medium uppercase tracking-wider mb-4">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive: active }) => 
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 group ${getNavClass(active)}`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      {!collapsed && (
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{item.title}</div>
                          <div className="text-xs opacity-70 truncate">{item.description}</div>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}