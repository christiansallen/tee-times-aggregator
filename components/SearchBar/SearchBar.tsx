import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./search-bar.less";

type Props = {
  // Add any props for the component here
};

const SearchBar: React.FC<Props> = (props) => {
  // Add state variables and event handlers for the form inputs here
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const localDate = new Date(year, month, day);
  const formattedDate = localDate.toISOString().substring(0, 10);

  return (
    <Form>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          type="text"
          name="location"
          id="location"
          placeholder="Enter a location"
        />
      </FormGroup>
      <FormGroup>
        <Label for="date">Date</Label>
        <Input
          type="date"
          name="date"
          id="date"
          defaultValue={formattedDate}
        />{" "}
      </FormGroup>
      <FormGroup>
        <Label for="players">Players</Label>
        <Input type="select" name="players" id="players">
          <option value="any">Any</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="holes">Holes</Label>
        <Input type="select" name="holes" id="holes">
          <option value="any">Any</option>
          <option value="9">9</option>
          <option value="18">18</option>
        </Input>
      </FormGroup>
      <Button>Search</Button>
    </Form>
  );
};

export default SearchBar;
