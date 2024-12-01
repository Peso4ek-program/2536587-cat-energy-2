# Папка для стилей, скриптов, картинок и других папок от сторонних библиотек
Для удобства внесения сторонних библиотек в ваш проект, вы можете использовать папку vendor. В этой папке вы можете размещать любые файлы, связанные с внешними библиотеками.

Например, предположим, что вы хотите добавить в проект библиотеку, которая включает в себя как стилевой файл library.css, так и скрипты library.js. Чтобы интегрировать их в ваш проект, следуйте этим шагам:

Положите файлы библиотеки в папку vendor, как показано ниже:

```bash
├── source/
│   └── vendor/
│        ├── library.css
│        └── library.js
```

Если у вас есть несколько библиотек с разными файлами, вы можете группировать файлы одной библиотеки в ее собственную подпапку. Например:
```bash
├── source/
│   └── vendor/
│       └── library/
│             ├── library.css
│             └── library.js
```

При сборке вашего проекта, все файлы из папки vendor будут включены в папку build, сохраняя их структуру. Например:
```bash
├── build/
│   └── vendor/
│        └── library/
│             ├── library.css
│             └── library.js
```

Таким образом, вы можете удобно организовать и внедрить сторонние библиотеки в ваш проект, сохраняя их структуру в папке vendor.