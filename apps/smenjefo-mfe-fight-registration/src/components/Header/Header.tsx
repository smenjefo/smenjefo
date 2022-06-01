import { FightType } from '../../slices/fightTypeSlice';
import HeaderFactory from './components/HeaderFactory';

interface IHeaderProps {
  fightType: FightType;
}

const Header = (props: IHeaderProps) => {
  return (
    <HeaderFactory
      fightType={props.fightType}
    />
  );
};

export default Header;