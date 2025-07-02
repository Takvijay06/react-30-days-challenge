import type { IAccordian, IProps } from "./interface";
import { MainAccordian } from "./MainAccordian";
import { containerStyle } from "./styles";

export const AccordianContainer = (props: IProps) => {
  const { data } = props;

  return (
    <div style={containerStyle}>
      {data &&
        data.map((item: IAccordian) => {
          return <MainAccordian key={item.id} {...item} />;
        })}
    </div>
  );
};
