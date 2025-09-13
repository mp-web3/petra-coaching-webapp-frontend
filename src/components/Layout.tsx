import { Box } from "@chakra-ui/react"
import Navigation from "./Navigation"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box 
      bg="surface.page" 
      color="text.primary" 
      minH="100vh"
      w="100%"
    >
      <Navigation />
      {children}
    </Box>
  )
}
