import { Divider } from "antd";
import React from "react";
import { Container, Contents, Label, Span } from "./styles";

type DashboardType = {
  title: string[];
  description: string[];
  width: number;
  color?: string[];
};
export default function DashBoard({
  title,
  description,
  width,
  color,
}: DashboardType) {
  return (
    <>
      <Container style={{ width: `${width}%` }}>
        {title.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <Contents>
                {color ? (
                  <Label color={color[idx]}>{item}</Label>
                ) : (
                  <Label>{item}</Label>
                )}
                <Span>{description[idx]}</Span>
              </Contents>
              {idx !== 2 && (
                <Divider
                  key="divider"
                  style={{ height: "4vh" }}
                  type="vertical"
                />
              )}
            </React.Fragment>
          );
        })}
      </Container>
    </>
  );
}
