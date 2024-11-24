import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-test/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | shared/ui/templates/footer',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<Shared::Ui::Templates::Footer />`);

      assert.dom().hasText('');

      // Template block usage:
      await render(hbs`
      <Shared::Ui::Templates::Footer>
        template block text
      </Shared::Ui::Templates::Footer>
    `);

      assert.dom().hasText('template block text');
    });
  },
);
