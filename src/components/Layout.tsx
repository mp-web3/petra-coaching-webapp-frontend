import { Box } from "@chakra-ui/react"

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
      {children}
    </Box>
  )
}
