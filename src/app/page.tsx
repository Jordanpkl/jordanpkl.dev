import { Center, Text, Container, Button } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Center mih={'100vh'}>
      <Container className="font-RobotoMono">
        <Text className="font-NFont5x7" ta="center" size={'2.5rem'} c={'white'}>JORDANPKL</Text>
        <Text ta="center" size={'md'}>I create stuff</Text>
        <Text ta="center" size={'xs'}>(sometimes)</Text>
        <Center>
          <Button
            variant="filled"
            className="font-NFont5x7 font-normal"
            size="compact-md"
            mt={'1.25rem'}
            color="#fff"
            c="black"
            component={Link}
            href="/about"
          >
            ABOUT ME
          </Button>
        </Center>
      </Container>
    </Center>
  );
}
