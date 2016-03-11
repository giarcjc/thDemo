# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Property.create([
  { address1: '123 Fake St.', address2: 'Suite 7G', city: 'Springfield', state: 'MO', zip: '12345', kind: 'House'}
])

User.create([
  { username: 'demotester', email: 'dt123@demo.io', password: 'password', valid: true}
])