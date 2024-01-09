import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";

const Globalization = () => {
  return (
    <>
      <h2>Globalization</h2>
      <p>
        <FormattedMessage id="welcome" />
      </p>
      <p>
        <FormattedDate value={Date.now()} />{" "}
      </p>
      <p>
        <FormattedNumber value={150000} />
      </p>
    </>
  );
};

export default Globalization;
