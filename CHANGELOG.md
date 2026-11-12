# v1.1.0 (10 April 2026)

- Fixed background color of A, C, E and H bullets to match MTA design guidelines. (thanks ![@dep-42](https://github.com/louh/mta-subway-bullets/pull/32)!)
- Update dependencies

# v1.0.0 (12 February 2025)

- **🚨 BREAKING CHANGES! 🚨**
  - Modernized build pipeline (no longer depends on Gulp).
  - **New:** optimized SVGs (via SVGO) are now provided as part of the package.
  - **New:** optimizing PNGs is now part of the build command, rather than a separate step.
  - All optimized SVGs and PNGs have been moved into respective folders in `dist` (formerly `build`). This will break file paths if you were importing directly from the package.
  - Source SVGs and build scripts are now located in `src` (formerly `source` or did not exist). Source SVGs are uncompressed but continue to be provided with the package anyway in case you need to use them.
  - Source image in Affinity Designer format updated to use v2.
- Fixed the F diamond bullet not appearing in the symbol bundle (`icons.svg`)

# v0.6.0 (12 February 2025)

- Add F diamond bullet (thanks ![@cedarbaum](https://github.com/louh/mta-subway-bullets/pull/21)!)

# v0.5.1 (15 January 2021)

- Remove `engines` field from `package.json`
- Security updates for dependencies

# v0.5.0 (5 February 2020)

- Add SR and SF bullets
- Update SIR bullet color and text size
- Recompress PNGs

# v0.4.1 (21 April 2019)

- Fix relative sizes of H and T bullets

# v0.4.0 (20 April 2019)

- **NOTE:** Package has been renamed to `mta-subway-bullets`.
- Add 6 and 7 diamond bullets
- Compress all PNGs

# v0.3.3 (20 April 2019)

- Reassigned all dependencies to `devDependencies` so the package install footprint is smaller
- Add build script to `npm start` command
- Explicitly set `files` array in `package.json`

# v0.3.2 (19 April 2019)

- Update `gulp@4.0.0` to resolve security vulnerabilities
- Can now be installed with `npm install`

# v0.3.1 (13 October 2018)

- Update dependencies

# v0.3.0 (20 April 2018)

- Add H bullet (post-Hurricane Sandy Rockaway Park shuttle)
- Add T bullet (proposed Second Avenue line). Background color from Illustrator file provided by Edward Cheng and MTAHQ.

# v0.2.0 (3 February 2018)

- Add W bullet.
