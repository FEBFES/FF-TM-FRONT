export type PlacementType = 'left' | 'top' | 'right' | 'bottom';

export interface TooltipProps {
  title: string;
  children: any;
  placement?: PlacementType;
}
