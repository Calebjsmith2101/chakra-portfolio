import {
  Text,
} from '@chakra-ui/react'

interface Props {
  copy: string
}

function Caleb(props: Props) {
  return <Text>{ props.copy }!</Text>;
}

export default function Bottom() {
  const copyName = "Hello this is the bottom of the page";
  return (
    <>
      <Caleb copy={ copyName } />
    </>
  );
}