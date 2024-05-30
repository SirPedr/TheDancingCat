import { ADJECTIVES } from '../../consts/adjectives';
import { NOUNS } from '../../consts/nouns';
import { PLACES } from '../../consts/places';
import { useTavernNameGenerator } from '../../hooks/useTavernNameGenerator';
import classes from './index.module.css';

export const TavernNameGeneratorPage = () => {
  const { name, regenerateTavernName } = useTavernNameGenerator({
    adjectives: ADJECTIVES,
    nouns: NOUNS,
    suffixes: PLACES,
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData(event.currentTarget);
    const includeSuffix = formData.get('includeSuffix') === 'on';

    regenerateTavernName({ includeSuffix });
  };

  return (
    <main className={classes.tavernPage}>
      <h1 className={classes.tavernPageName}>{name}</h1>

      <form onSubmit={onSubmit} className={classes.tavernPageForm}>
        <label className={classes.tavernPageLabel}>
          <input
            type="checkbox"
            name="includeSuffix"
            defaultChecked
            className={classes.tavernPageCheckbox}
          />
          Include suffix
        </label>
        <button type="submit" className={classes.tavernPageButton}>
          Generate
        </button>
      </form>
    </main>
  );
};
