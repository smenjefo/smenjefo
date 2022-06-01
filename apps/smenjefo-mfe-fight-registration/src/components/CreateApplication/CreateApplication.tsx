import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Slider } from '@smenjefo/smenjefo-ui';

import { FightType } from '../../slices/fightTypeSlice';

import { selectProfileStatus } from '../../selectors/profileSelectors';
import CreateApplicationButtonFactory from './CreateApplicationButton/CreateApplicationButtonFactory';
import ApplicationFormFactory from './ApplicationForm/ApplicationFormFactory';

interface ICreateApplicationProps {
  fightType: FightType;
}

const CreateApplication = (props: ICreateApplicationProps) => {
  const profileStatus = useSelector(selectProfileStatus);

  const [isApplicationFormVisible, setIsApplicationFormVisible] = useState(false);

  const switchApplicationFormVisibility = useCallback(() => {
    setIsApplicationFormVisible(!isApplicationFormVisible);
  }, [isApplicationFormVisible]);

  if (profileStatus !== 'free') {
    return null;
  }

  return (
    <Slider.Index
      activeItem={Number(isApplicationFormVisible)}
    >
      <Slider.Item>
        <CreateApplicationButtonFactory
          fightType={props.fightType}
          onClick={switchApplicationFormVisibility}
        />
      </Slider.Item>

      <Slider.Item>
        <ApplicationFormFactory
          fightType={props.fightType}
          onSubmit={switchApplicationFormVisibility}
          onDecline={switchApplicationFormVisibility}
        />
      </Slider.Item>
    </Slider.Index>
  );
};

export default CreateApplication;