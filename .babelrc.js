module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/proposal-class-properties"
  ],
  "env": {
    "production": {
      "plugins": ["transform-react-remove-prop-types"]
    }
  }
}
