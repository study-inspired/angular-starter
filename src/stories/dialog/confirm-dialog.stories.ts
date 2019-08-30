import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, color } from '@storybook/addon-knobs';

import { SliderModule } from '@app/shared/slider';

storiesOf('SliderComponent', module)
  .addDecorator(withKnobs)

  .addDecorator(
    moduleMetadata({
      imports: [SliderModule]
    }),
  )
  .add(
    'default',
    () => ({
      template: `<app-slider [value]="value" [color]="color" (ok)="onOK($event)"></app-slider>`,
      props: {
        value: number('value', 20),
        color: color('color', '#ff4081'),
        onOK: action('onOK')
      }
    }),
    {
      notes: `
        <h2>My notes on emojis</h2>
        <em>It's not all that important to be honest, but..</em>
        Emojis are great, I love emojis, in fact I like using them in my Component notes too! 😇
      `,
    }
  );
