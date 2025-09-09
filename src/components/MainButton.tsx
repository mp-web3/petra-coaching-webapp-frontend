import { Button, Link } from '@chakra-ui/react'

interface MainButtonProps {
    text: string
    link: string
}

const MainButton = ({ text, link }: MainButtonProps) => {
    return (
        <Link href={link}>
            <Button 
                bg="surface.action"
                color="white"
                textTransform="uppercase"
                px={8}
                py={4}
                borderRadius="md"
                fontWeight="semibold"
                fontSize="lg"
                _hover={{
                    bg: "interactive.primaryHover"
                }}
            >
                {text}
            </Button>
        </Link>
    )
}

export default MainButton
