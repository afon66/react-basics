import Button from "../Common/Button/Button.jsx";

export const TabsSection = ({ active, onClick }) => {
  return (
    <section>
      <Button
        isActive={active === "main"}
        onClick={() => onClick("main")}
      >
        Main
      </Button>
      <Button
        isActive={active === "feedback"}
        onClick={() => onClick("feedback")}
      >
        Feed back
      </Button>
      <Button
        isActive={active === "effect"}
        onClick={() => onClick("effect")}
      >
        Effect
      </Button>
    </section>
  );
};
