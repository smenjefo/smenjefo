import React, { useContext } from 'react';

import Form from '../../Form/Form';
import FormSelectComponent from '../../Form/components/Select';
import FormSubmitComponent from '../../Form/components/Submit';
import FormButtonComponent from '../../Form/components/Button';

import ControllersContext from '../../ControllersProvider/ControllersContext';
import IApplicationFormProps from './IApplicationFormProps';
import { useSelector } from 'react-redux';
import LocalizationContext from '../../Localization/LocalizationContext';
import { selectProfile } from '../../../selectors/profileSelectors';

const TeamOnTeamApplicationForm = (props: IApplicationFormProps) => {
  const { controllers } = useContext(ControllersContext);
  const { t } = useContext(LocalizationContext);

  const schema = {
    mode: {
      name: 'mode',
      options: [
        { label: t('fightRegistration.FIGHT_REGISTRATION_MODE_TRAINING'), value: 'training' },
        { label: t('fightRegistration.FIGHT_REGISTRATION_MODE_LADDER'), value: 'ladder' },
      ],
    },
    trigger: {
      name: 'trigger',
      options: [
        { label: t('fightRegistration.FIGHT_REGISTRATION_TRIGGER_NONE'), value: 'none' },
        { label: t('fightRegistration.FIGHT_REGISTRATION_TRIGGER_SHUFFLE'), value: 'shuffle' },
        { label: t('fightRegistration.FIGHT_REGISTRATION_TRIGGER_SHUFFLE_PLUS'), value: 'shuffle+' },
      ],
    },
    teamCapacity: {
      name: 'teamCapacity',
      options: [
        { label: '2x2', value: '2' },
        { label: '3x3', value: '3' },
        { label: '4x4', value: '4' },
        { label: '5x5', value: '5' },
      ],
    },
  };

  const profile = useSelector(selectProfile);

  const onSubmit = (values) => {
    controllers.fightApplications.createFightApplication({
      ownerEntityId: profile.entityId,
      ownerNickname: profile.nickname,
      type: 'teamOnTeam',
      mode: values.mode,
      teamCapacity: Number(values.teamCapacity),
      fightFilters: [],
      fightTriggers: [],
    });

    props.onSubmit();
  };

  const onDecline = () => {
    props.onDecline();
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        [schema.mode.name]: 'training',
        [schema.trigger.name]: 'none',
        [schema.teamCapacity.name]: 5,
        filters: [],
      }}
    >
      {(submitting) => {
        return (
          <>
            <FormSelectComponent
              label={t('fightRegistration.FIGHT_REGISTRATION_MODE')}
              name={schema.mode.name}
              options={schema.mode.options}
            />

            <FormSelectComponent
              label={t('fightRegistration.FIGHT_REGISTRATION_TRIGGER')}
              name={schema.trigger.name}
              options={schema.trigger.options}
            />

            <FormSelectComponent
              label={t('fightRegistration.FIGHT_REGISTRATION_TEAM_CAPACITY')}
              name={schema.teamCapacity.name}
              options={schema.teamCapacity.options}
            />

            <FormSubmitComponent
              label={t('fightRegistration.FIGHT_REGISTRATION_APPLICATION_FORM_CREATE')}
              disabled={submitting}
            />

            <FormButtonComponent
              label={t('fightRegistration.FIGHT_REGISTRATION_APPLICATION_FORM_DECLINE')}
              disabled={submitting}
              onClick={onDecline}
              theme="error"
            />
          </>
        );
      }}
    </Form>
  );
};

export default TeamOnTeamApplicationForm;