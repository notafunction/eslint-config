module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },

    extends: [
        'eslint:all',
        'plugin:import/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:yml/standard',
    ],

    ignorePatterns: [
        '*.min.*',
        'CHANGELOG.md',
        'dist',
        'LICENSE*',
        'output',
        'coverage',
        'public',
        'package-lock.json',
        'pnpm-lock.yaml',
        'yarn.lock',
        '__snapshots__',
        '!.github',
        '!.vscode',
    ],

    overrides: [
        /* YAML */
        {
            files: ['*.yaml', '*.yml'],
            parser: 'yaml-eslint-parser',
            rules: {
                'spaced-comment': 'off',
                'yml/no-empty-document': 'off',
                'yml/quotes': [
                    'error',
                    { avoidEscape: false, prefer: 'single' },
                ],
            },
        },

        /* JSON */
        {
            files: ['*.json', '*.json5'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'comma-dangle': ['error', 'never'],
                'max-lines': 'off',
                'quote-props': ['error', 'always'],
                quotes: ['error', 'double'],
            },
        },

        /* package.json */
        {
            files: ['package.json'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/sort-keys': [
                    'error',
                    {
                        order: [
                            'name',
                            'version',
                            'description',
                            'keywords',
                            'license',
                            'repository',
                            'funding',
                            'author',
                            'type',
                            'files',
                            'exports',
                            'main',
                            'module',
                            'unpkg',
                            'bin',
                            'scripts',
                            'husky',
                            'lint-staged',
                            'peerDependencies',
                            'peerDependenciesMeta',
                            'dependencies',
                            'devDependencies',
                            'eslintConfig',
                        ],
                        pathPattern: '^$',
                    },
                    {
                        order: { type: 'asc' },
                        pathPattern:
                            '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
                    },
                ],
            },
        },

        /* TypeScript Declaration Files */
        {
            files: ['*.d.ts'],
            rules: {
                'import/no-duplicates': 'off',
            },
        },

        /* JavaScript */
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },

        {
            // Markdown codeblocks
            files: ['**/*.md/*.*'],
            rules: {
                '@typescript-eslint/no-redeclare': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-use-before-define': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                'import/no-unresolved': 'off',
                'no-alert': 'off',
                'no-console': 'off',
                'no-restricted-imports': 'off',
                'no-undef': 'off',
                'no-unused-expressions': 'off',
                'no-unused-vars': 'off',
            },
        },
    ],

    plugins: ['html'],

    reportUnusedDisableDirectives: true,

    /* Base Rules */
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'array-callback-return': 'error',
        'array-element-newline': ['error', 'consistent'],
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': 'off',
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs'],
        camelcase: 'off',
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': ['error', 'always'],
        'comma-spacing': ['error', { after: true, before: false }],
        'comma-style': ['error', 'last'],
        complexity: ['off', 11],
        'consistent-return': 'off',
        curly: ['error', 'multi-line', 'consistent'],
        'dot-location': ['error', 'property'],
        eqeqeq: 'off',
        'eslint-comments/disable-enable-pair': 'off',
        'func-call-spacing': ['off', 'never'],
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'consistent'],
        'generator-star-spacing': 'off',
        'id-length': 'off',
        'implicit-arrow-linebreak': 'off',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/order': [
            'error',
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: 'asc',
                },
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                'newlines-between': 'always',
                pathGroups: [
                    {
                        group: 'external',
                        pattern: '{vue,@vue/**}',
                        position: 'before',
                    },
                    {
                        group: 'external',
                        pattern: '{react,@react/**}',
                        position: 'before',
                    },
                    {
                        group: 'internal',
                        pattern: '@/**',
                        position: 'before',
                    },
                    {
                        group: 'internal',
                        pattern: '@@/**',
                        position: 'before',
                    },
                ],
            },
        ],
        indent: [
            'error',
            2,
            { SwitchCase: 1, VariableDeclarator: 2, outerIIFEBody: 1 },
        ],
        'key-spacing': ['error', { afterColon: true, beforeColon: false }],
        'line-comment-position': 'off',
        'max-len': 'off',
        'max-lines': [
            'error',
            { max: 500, skipBlankLines: true, skipComments: true },
        ],
        'max-lines-per-function': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'multiline-comment-style': 'off',
        'new-cap': 'off',
        'no-alert': 'warn',
        'no-bitwise': 'off',
        'no-case-declarations': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-constant-condition': 'warn',
        'no-debugger': 'error',
        'no-empty-function': 'off',
        'no-eq-null': 'off',
        'no-implicit-coercion': 'off',
        'no-inline-comments': 'off',
        'no-magic-numbers': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'off',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        'no-negated-condition': 'off',
        'no-nested-ternary': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': [
            'error',
            'DebuggerStatement',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        'no-return-assign': 'off',
        'no-return-await': 'off',
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-undefined': 'off',
        'no-underscore-dangle': 'off',
        'no-unmodified-loop-condition': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'warn',
        'no-use-before-define': 'off',
        'no-useless-escape': 'off',
        'no-var': 'error',
        'no-void': 'off',
        'no-warning-comments': 'off',
        'no-with': 'error',
        'object-curly-spacing': ['error', 'always'],
        'object-shorthand': [
            'error',
            'always',
            {
                avoidQuotes: true,
                ignoreConstructors: false,
            },
        ],
        'one-var': ['error', 'never'],
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', next: 'return', prev: 'let' },
            { blankLine: 'always', next: 'return', prev: 'const' },
            { blankLine: 'always', next: 'return', prev: 'function' },
            { blankLine: 'always', next: 'function', prev: 'function' },
            { blankLine: 'always', next: 'let', prev: 'const' },
            { blankLine: 'always', next: 'if', prev: 'const' },
            { blankLine: 'always', next: 'const', prev: 'let' },
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-destructuring': [
            'error',
            {
                AssignmentExpression: {
                    array: false,
                    object: true,
                },
                VariableDeclarator: {
                    array: false,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'prefer-named-capture-group': 'off',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        quotes: ['error', 'single'],
        'require-await': 'off',
        'require-unicode-regexp': 'off',
        semi: ['error', 'never'],
        'sort-imports': 'off',
        'sort-keys': 'off',
        'space-before-function-paren': 'off',
        'template-curly-spacing': 'error',
        'vars-on-top': 'error',
    },

    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
        },
    },
}
