{{$register = Package.Raxon.Git.Gui:Init:register()}}
{{if(!is.empty($register))}}
{{Package.Raxon.Git.Gui:Import:role.system()}}
{{$flags = flags()}}
{{$options = options()}}
{{Package.Raxon.Git.Gui:Setup:install($flags, $options)}}
{{/if}}