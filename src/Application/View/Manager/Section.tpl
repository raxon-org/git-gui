{{RAX}}
{{block.html()}}
<section id="{{$id}}" name="{{$section.name}}" class="display-none">
    <div class="dialog dialog-{{config('controller.name')}}-main">
        <div class="head" data-title="{{__('git.manager.title')}} | {{$request.file|>default:''}}">
            <h1><img src="{{route.get($section.name + '-icon')}}" class="icon" /> {{__('git.manager.title')}}</h1>
            <span class="close"><i class="fas fa-window-close"></i></span>
            <span class="minimize"><i class="far fa-window-minimize"></i></span>
        </div>
        <div class="menu">
            <ul>
                <li class="file">{{__('git.manager.file')}}</li>
            </ul>
            <div class="menu-file-protector display-none">
            </div>
            <div class="menu-file display-none">
                <ul>
                    /*
                    <li>New</li>
                    <li>Open</li>
                    <li class="menu-file-save">Save</li>
                    <li>Save as</li>
                    <li>Print</li>
                    */
                    <li class="menu-file-scan">{{__('git.manager.scan')}}</li>
                    <li class="menu-file-demo">{{__('git.manager.demo')}}</li>
                    <li class="menu-file-demo-write">{{__('git.manager.demo.write')}}</li>
                    <li class="menu-file-exit">{{__('git.manager.exit')}}</li>
                </ul>
            </div>
        </div>
        <div class="body">
            <div class="pane-left">
            </div>
            <div class="pane-right">
                <p class="loading">
                    <i class="fas fa-spinner fa-spin"></i><br>
                    <span>{{__('git.manager.loading')}}</span>
                </p>
            </div>
        </div>
        <div class="footer">
        </div>
    </div>
</section>
{{/block}}