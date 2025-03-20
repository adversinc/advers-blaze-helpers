This package provides a simple way of using sessions and collections in the Meteor Spacebars template environment.

Helpers:

* `{{$.javascript /* arguments */ }}` - The $script helper
* `{{$.Session.get key}}`
* `{{$.Session.equals key value}}
* `{{getLength a}} returns length property
* `{{$.Meteor.status.connected}}
* `{{$.Meteor.userId}}
* `{{cutString str maxLen}} cuts string appends...
* `{{nl2br text}} *nl2br function for text
* `{{isSelected a b}} if a equals b then return " selected"
* `{{isChecked a b}} if a equals b then return " checked"
* `{{$eq a b}} if a equals b then return true
* `{{$neq a b}} if not a equals b then return true
* `{{$in a b c d}} if a equals one of optional values
* `{{$nin a b c d}} if a equals none of optional values
* `{{$lt a b}}
* `{{$gt a b}}
* `{{$lte a b}}
* `{{$gte a b}}
* `{{$and a b}}
* `{{$or a b}}
* `{{$not a}}
* `{{$mapped cursor}} can take cursor or array
* `{{$exists a}} a != undefined

A special credit goes to @belisarius222 aka Ted Blackman for sparking an idear for a solution for the new $uper helper, Thanks Ted!

# Usage
1. Install:
```
   meteor add raix:handlebar-helpers
```
   
# The new $ !
You can now call JavaScript functions or get variables in directly - no use of eval At the moment the only scopes allowed are Session, Meteor, and console. A way to add more scopes, e.g. Collections or others, is in the works.

```
Read my session: {{$.Session.get 'mySession'}}

Is mySession equal to 4?: {{$.Session.equals 'mySession' 4}}

Does this helper render??: {{$.console.log 'Nope Im writing to the console log...'}}

What user id do I have: {{$.Meteor.userId}}

What's the connection status?: {{$.Meteor.status.connected}}

Hmm, I am client right? {{$.Meteor.isClient}}
You can access any global objects/functions/variables - and it's still reactive!!
```

# $mapped
Mapped each will map $first, $last, and $index onto your cursor or array

```
{{#each $mapped myCursor}}
    {{name}}{{#unless $last}},{{/unless}}
{{/each}}
```

# Add objects to the scope

Use the Helpers.addScope(name, obj) to add objects into the $ scope.

Example:

```
Helpers.addScope('Session', Session);
Helpers.addScope('Meteor', Meteor);
```

It's the default scope and it allows JavaScript access: {{$.Meteor.isClient}} etc.

# Remove objects from scope

```
Helpers.removeScope(name);
```
