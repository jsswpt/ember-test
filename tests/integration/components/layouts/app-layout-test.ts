import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-test/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layouts/app-layout', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Layouts::AppLayout />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Layouts::AppLayout>
        template block text
      </Layouts::AppLayout>
    `);

    assert.dom().hasText('template block text');
  });
});
