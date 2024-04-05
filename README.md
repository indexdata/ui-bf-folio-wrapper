# ui-bf-folio-wrapper

## Dependencies

This module requires the following components to function:

1. [`@folio-eis/marva-next`](https://github.com/FOLIO-EIS/ui-linked-data) (also known as `ui-linked-data`, `marva-next`). This module needs to be built as a library in order for `ui-bf-folio-wrapper` to work. Refer to point 1 from its [Usage: As an embedded application](https://github.com/FOLIO-EIS/ui-linked-data?tab=readme-ov-file#as-an-embedded-application) section on how to do so.

## Prerequisites

### Install Stripes CLI

- [Install guidelines](https://github.com/folio-org/stripes-cli/blob/master/README.md)

### Link @folio-eis/marva-next package locally

1. From within the `@folio-eis/marva-next` (`ui-linked-data`) repository on your machine, run `yarn link`

## Run within the Stripes platform

1. Open the terminal and run `stripes workspace`
2. From the list of options presented to you, select the platform named `platform-complete`. If necessary, select modules, additional libraries, plugins. Press Enter.
3. If the previous step was successful, the folder you ran the `stripes workspace` command in will now contain a folder named `stripes`. Clone the `ui-bf-folio-wrapper` repository into the `stripes` folder.
4. From within the `ui-bf-folio-wrapper` folder run `yarn link @folio-eis/marva-next`
5. Temporarily remove the `"@folio-eis/marva-next": "*"` from the `dependencies` field of `ui-bf-folio-wrapper`'s `package.json`.
6. From within the `stripes` folder, run `yarn`.
7. Bring back the `"@folio-eis/marva-next": "*"` field to the `dependencies` field of `ui-bf-folio-wrapper`'s `package.json`.
8. Go to `platform-complete` folder and modify `stripes.config.js.local` file. It should have the structure described below:

```json
module.exports = {
  okapi: { 'url':'https://okapi-missinglinks.int.aws.folio.org', 'tenant':'fs09000000' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    maxUnpagedResourceCount: 2000,
    showPerms: false,
    preserveConsole: true,
    useSecureTokens: true,
  },
  modules: {
    '@folio-eis/bf-folio-wrapper': '../ui-bf-folio-wrapper',
  },
  branding: {
    logo: {
      src: './tenant-assets/opentown-libraries-logo.png',
      alt: 'Opentown Libraries',
    },
    favicon: {
      src: './tenant-assets/opentown-libraries-favicon.png',
    },
  }
};
```

9. Within `platform-complete` folder, run `stripes serve stripes.config.js.local --tenant fs09000000 --okapi https://okapi-missinglinks.int.aws.folio.org --hasAllPerms`
