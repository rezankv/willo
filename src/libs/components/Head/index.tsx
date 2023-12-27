import { Helmet } from "react-helmet";

interface Props {
  title?: string;
}
export const Head = ({ title = "Willo" }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
