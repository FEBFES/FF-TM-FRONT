import React from "react";
import {
  PriorityDefault,
  PriorityHigh,
  PriorityLow,
  PriorityMedium,
} from "../../../../assets/icons/TaskIcons";

export type IPriorityType = "DEFAULT" | "LOW" | "MEDIUM" | "HIGH";

const priorityEnum = {
  DEFAULT: <PriorityDefault />,
  LOW: <PriorityLow />,
  MEDIUM: <PriorityMedium />,
  HIGH: <PriorityHigh />,
};

interface PriorityProps {
  priority: IPriorityType;
}

export const Priority: React.FC<PriorityProps> = ({ priority }) => {
  return <div>{priorityEnum[priority]}</div>;
};
