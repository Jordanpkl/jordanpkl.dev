'use client'
import { Center, Text, Container, Button, Loader, Timeline, Title, Badge } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectsInitialVales, ProjectsProps } from "@/Interfaces/Projects";
import axios from "axios";
import { GithubIcon } from "@/components/styles/SVG";

export default function Projects() {
    const [projectsData, setProjectsData] = useState<ProjectsProps>(ProjectsInitialVales);
    const [fetched, setFetched] = useState<Boolean>(false);

    const fetchAbout = async () => {
        const response = await axios.get('/api/projects')
        setProjectsData(response.data)
        setFetched(true)
    }
    useEffect(() => {
        fetchAbout();
    }, [])
    return !fetched ? (
        <Center mih={'90vh'}>
            <Loader color="white" size="xl" type="dots" />
        </Center>
    ) : (
        <>
            <Center mih={'90vh'}>
                <Container className="font-RobotoMono" pt={'5rem'} pb={'5rem'}>
                    <Text className="font-NFont5x7" ta="center" size={'2.5rem'} c={'white'} mb={'1.75rem'}>PROJECTS</Text>
                    <Timeline bulletSize={24} color="white" active={(projectsData.projects?.length) - 1}>
                        {projectsData.projects?.map((project, index) => (
                            <Timeline.Item key={index} title={
                                <Text key={index} fw={700} className="font-NFont5x7">
                                    {project.label.toUpperCase()}
                                    {project.description ? <Text span size="sm" className="font-RobotoMono"> {project.description}</Text> : ''}
                                </Text>
                            }>
                                {project.info?.map((info, index) => (
                                    <Text key={index} c={'dimmed'}>
                                        {info}
                                    </Text>
                                ))}
                                {project.old?.map((old, index) => (
                                    <Text key={index} c={'dimmed'}>
                                        <s>{old}</s>
                                    </Text>
                                ))}
                                {project.source ? (
                                    <Link href={project.source}>
                                        <Badge
                                            size="sm"
                                            mt={4}
                                            color="gray.3"
                                            className="hover:bg-white"
                                            autoContrast
                                            leftSection={<GithubIcon size={12} />}
                                        >
                                            SOURCE
                                        </Badge>
                                    </Link>
                                ) : ""}
                            </Timeline.Item>
                        ))}
                    </Timeline>
                    <Center>
                        {projectsData.buttons?.map((button, index) => (
                            <Button
                                key={index}
                                variant="filled"
                                className="font-NFont5x7 font-normal"
                                size="compact-md"
                                mt={'1.75rem'}
                                mr={'0.5rem'}
                                ml={'0.5rem'}
                                color="#fff"
                                c="black"
                                component={Link}
                                href={button.link}
                            >
                                {button.label.toUpperCase()}
                            </Button>
                        ))}
                    </Center>
                </Container>
            </Center>
        </>
    )
};
