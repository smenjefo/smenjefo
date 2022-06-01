import { useContext } from 'react';

import Form from '../../Form/Form';
import FormSelectComponent from '../../Form/components/Select';
import FormSubmitComponent from '../../Form/components/Submit';
import FormButtonComponent from '../../Form/components/Button';

import ControllersContext from '../../ControllersProvider/ControllersContext';
import IApplicationFormProps from './IApplicationFormProps';
import { useSelector } from 'react-redux';
import LocalizationContext from '../../Localization/LocalizationContext';
import { selectProfile } from '../../../selectors/profileSelectors';

const DuelApplicationForm = (props: IApplicationFormProps) => {
  const { controllers } = useContext(ControllersContext);
  const { t } = useContext(LocalizationContext);

  const profile = useSelector(selectProfile);

  const schema = {
    mode: {
      name: 'mode',
      options: [
        {
          label: t('fightRegistration.FIGHT_REGISTRATION_MODE_TRAINING'),
          value: 'training',
        },
        {
          label: t('fightRegistration.FIGHT_REGISTRATION_MODE_LADDER'),
          value: 'ladder',
        },
      ],
    },
  };

  const onSubmit = (values) => {
    controllers.fightApplications.createFightApplication({
      ownerEntityId: profile.entityId,
      ownerNickname: profile.nickname,
      type: 'duel',
      mode: values.mode,
      teamCapacity: 1,
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

export default DuelApplicationForm;