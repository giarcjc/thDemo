task :deploy do
  system("rm -rf ./public/*")       # empty the public directory
  system("cd client; gulp build")

  # make a bogus manifest file to turn off asset compilation on heroku 
  #   see here: https://devcenter.heroku.com/articles/rails-asset-pipeline
  system("mkdir public/assets; touch public/assets/manifest-098f6bcd4621d373cade4e832627b4f6.json")  

  system("git add public/")
  system("git commit -m \"deploying...\"")
  system("git push heroku master")
end