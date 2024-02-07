import dropDownItem from "./dropDownItem.js";
import dropDownContainer from "./dropDownContainer.js";

export default function dropDown(props, choices = []) {
  const container = dropDownContainer(props);
  choices.forEach((choice) => dropDownItem(choice, container));
}
