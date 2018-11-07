require 'ruby_cowsay'

args = ARGV

puts Cow.new.say(args.join(' '))
