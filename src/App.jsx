import { Button, ChakraProvider,
  Container,
  ScaleFade,
  useDisclosure,} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getInteractions } from './api/interactions';
import { getInteractionsPercentage } from './utils/services';
import { TableBox } from './components/TableBox';


export const App = () => {
  const [interactions, setInteractions] = useState([]);
  const { isOpen, onToggle } = useDisclosure()

  useEffect(() => {
    getInteractions().then(res => setInteractions(res.interactions))
  }, [])

  const table = getInteractionsPercentage(interactions);

  return (
    <ChakraProvider>
      <Container 
        maxW='md' 
        display='flex'
        flexDirection='column' 
        justifyContent='center'
      >
      <Button 
          onClick={onToggle}>{isOpen ? `Click To Hide The Table`: `Click To Show The Table`}
        </Button>
        <ScaleFade in={isOpen}>
        <TableBox table={table}/>
        </ScaleFade>
      </Container>
    </ChakraProvider>
  )
}
