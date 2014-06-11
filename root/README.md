# {%= name %}

{%= description %}

## Getting Started
```
npm install
npm start
```
## Documentation
`npm start` will build the application and start a simple web server on port 8080.
There are four key pages:
  - index.html (this page contains non-minified content)
  - index-min.html (this page contains minified content)
  - test.html (this page tests non-minified content)
  - test-min.html (this page tests minified content)

## Examples
_(Coming soon)_

## Contributing
Use the following:
```
grunt watch
```

## Release History
_(Nothing yet)_

## License
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}  
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
