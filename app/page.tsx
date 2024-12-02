import Header from "./components/Header/Header";
import Section from "./components/MeSection/MeSection";
import StoryTimeline from "./components/StoryTimeline/StoryTimeline";
export default function Home() {
  return (
    <>
      <Header />
      <Section/>
      <StoryTimeline/>
      <Section/>
    </>
  );
}
