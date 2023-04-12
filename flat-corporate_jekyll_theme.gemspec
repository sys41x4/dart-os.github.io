# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "flat-corp_jekyll_theme"
  spec.version       = "1.0.19"
  spec.authors       = ["Arijit Bhowmick"]
  spec.email         = ["sys41x4@egmail.com"]

  spec.summary       = %q{A simple and minimal Jekyll theme..}
  spec.homepage      = "https://github.com/sys41x4/flat-corp"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README|CHANGELOG)((\.(txt|md|markdown|js|css)|$)))}i)
  end

  spec.add_development_dependency "jekyll", "~> 4.0"
  spec.add_development_dependency "bundler", "~> 2.0"
end
