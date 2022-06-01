import DirectionTextMapping from "./DirectionTextMapping";
import ITextMapping from "./ITextMapping";
import RoleTextMapping from "./RoleTextMapping";
import TurnTypeTextMapping from "./TurnTypeTextMapping";

interface ITextMappings {
  directionTextMapping: ITextMapping;
  turnTypeTextMapping: ITextMapping;
  roleTextMapping: ITextMapping;
}

interface ITextMappingProps {
  children: (textMappings: ITextMappings) => any;
}

const directionTextMapping = new DirectionTextMapping();
const turnTypeTextMapping = new TurnTypeTextMapping();
const roleTextMapping = new RoleTextMapping();

const TextMapping = (props: ITextMappingProps) => {
  return props.children({
    directionTextMapping,
    turnTypeTextMapping,
    roleTextMapping,
  });
};

export default TextMapping;