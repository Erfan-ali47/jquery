$(document).ready(function(){

   //alert
//    alert("hello world");
$(`#btn`).on("click", function(){
   alert("hello world")
   color:green;
     })
    //  show/hide
    $(`#hide`).on("click", function(){
        $(`h3`).hide()
    })
    $(`#show`).on("click", function(){
        $(`h3`).show()
    })
    
    // Draggable
    $( "#draggable" ).draggable();

    // Tabs
    $( "#tabs" ).tabs();
   
    // selectable
    $( "#selectable" ).selectable();

    // shortable/drop placeholder
    $( "#sortable" ).sortable({
        placeholder: "ui-state-highlight"
      });
    $( "#sortable" ).disableSelection();

    // accordion
    $( function() {
        $( "#accordion" ).accordion({
            header: "> div > h3"
          })
        .sortable({
            axis: "y",
            handle: "h3",
        stop: function( event, ui ) {ui.item.children( "h3" ).triggerHandler( "focusout" );
     
    $( this ).accordion( "refresh" );
            }
        });
    } );

    // Checkboxradio
    function handleShape( e ) {
      $( ".shape" )
        .removeClass( "circle pill square rectangle" )
        .addClass( $( e.target ).val() );
    };
    function handleToggle( e ) {
      var target = $( e.target );
 
      if ( target.is( ".brand-toggle" ) ) {
        var checked = target.is( ":checked" ),
          value = $( "[name='brand']" )
            .filter( ":checked" )
            .attr( "data-" + target[ 0 ].id )
        $( ".shape" ).css( target[ 0 ].id, checked ? value : "" );
      } else {
        $( ".shape" ).toggleClass( target[ 0 ].id, target.is( ":checked") );
      }
    }
    function updateBrand() {
      handleShape( { target: $( "[name='shape']:checked" ) } );
      $( ".toggle:checked" ).each( function() {
        handleToggle( { target: $( this ) } );
      } );
    }
 
    // Initalize widgets
    $( "input" ).checkboxradio();
    $( ".shape-bar, .brand" ).controlgroup();
    $( ".toggles" ).controlgroup( {
      direction: "vertical"
    } );
 
    // Bind event handlers
    $( "[name='shape']").on( "change", handleShape );
    $( ".toggle" ).on( "change", handleToggle );
    $( "[name='brand']").on( "change", updateBrand );
 
    // Set initial values
    updateBrand();
        
    //    animation
    $( "#datepicker" ).datepicker();
    $( "#anim" ).on( "change", function() {
      $( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
    });
    
    // dilog
    $( function() {
        var dialog, form,
     
          emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          name = $( "#name" ),
          email = $( "#email" ),
          password = $( "#password" ),
          allFields = $( [] ).add( name ).add( email ).add( password ),
          tips = $( ".validateTips" );
     
    function updateTips( t ) {
          tips
            .text( t )
            .addClass( "ui-state-highlight" );
          setTimeout(function() {
            tips.removeClass( "ui-state-highlight", 1500 );
          }, 500 );
    }
     
    function checkLength( o, n, min, max ) {
          if ( o.val().length > max || o.val().length < min ) {
            o.addClass( "ui-state-error" );
            updateTips( "Length of " + n + " must be between " +
              min + " and " + max + "." );
            return false;
          } else {
            return true;
          }
    }
     
    function checkRegexp( o, regexp, n ) {
          if ( !( regexp.test( o.val() ) ) ) {
            o.addClass( "ui-state-error" );
            updateTips( n );
            return false;
          } else {
            return true;
          }
    }
     
    function addUser() {
          var valid = true;
          allFields.removeClass( "ui-state-error" );
     
          valid = valid && checkLength( name, "username", 3, 16 );
          valid = valid && checkLength( email, "email", 6, 80 );
          valid = valid && checkLength( password, "password", 5, 16 );
     
          valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
          valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
          valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );
     
          if ( valid ) {
    $( "#users tbody" ).append( "<tr>" +
              "<td>" + name.val() + "</td>" +
              "<td>" + email.val() + "</td>" +
              "<td>" + password.val() + "</td>" +
            "</tr>" );
            dialog.dialog( "close" );
          }
          return valid;
    }
     
        dialog = $( "#dialog-form" ).dialog({
          autoOpen: false,
          height: 400,
          width: 350,
          modal: true,
          buttons: {
            "Create an account": addUser,
            Cancel: function() {
              dialog.dialog( "close" );
            }
          },
          close: function() {
            form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
          }
    });
     
        form = dialog.find( "form" ).on( "submit", function( event ) {
          event.preventDefault();
          addUser();
        });
     
$( "#create-user" ).button().on( "click", function() {
          dialog.dialog( "open" );
        });
} );
    
// menu
    $( "#menu" ).menu({
        items: "> :not(.ui-widget-header)"
});
    
// slider/equalizer
    $( function() {
    $( "#master" ).slider({
          value: 60,
          orientation: "horizontal",
          range: "min",
          animate: true
});

// setup graphic EQ
    $( "#eq > span" ).each(function() {
  
// read initial values from markup and remove that
          var value = parseInt( $( this ).text(), 10 );
          $( this ).empty().slider({
            value: value,
            range: "min",
            animate: true,
            orientation: "vertical"
          });
        });
} );
    

// spinner
    $( function() {
        $( "#currency" ).on( "change", function() {
          $( "#spinner" ).spinner( "option", "culture", $( this ).val() );
        });
     
        $( "#spinner" ).spinner({
          min: 5,
          max: 2500,
          step: 25,
          start: 1000,
          numberFormat: "C"
});


// tabs
    $( function() {
        $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
        $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
} );
    
// tooltips
    $( document ).tooltip();


// button
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
} );

} );
 

// progressbar
var progressTimer,
progressbar = $( "#progressbar" ),
progressLabel = $( ".progress-label" ),
dialogButtons = [{
  text: "Cancel Download",
  click: closeDownload
}],
dialog = $( "#dialog" ).dialog({
  autoOpen: false,
  closeOnEscape: false,
  resizable: false,
  buttons: dialogButtons,
  open: function() {
    progressTimer = setTimeout( progress, 2000 );
  },
  beforeClose: function() {
    downloadButton.button( "option", {
      disabled: false,
      label: "Start Download"
    });
  }
}),
downloadButton = $( "#downloadButton" )
  .button()
  .on( "click", function() {
    $( this ).button( "option", {
      disabled: true,
      label: "Downloading..."
    });
    dialog.dialog( "open" );
  });

progressbar.progressbar({
value: false,
change: function() {
  progressLabel.text( "Current Progress: " + progressbar.progressbar( "value" ) + "%" );
},
complete: function() {
  progressLabel.text( "Complete!" );
  dialog.dialog( "option", "buttons", [{
    text: "Close",
    click: closeDownload
  }]);
  $(".ui-dialog button").last().trigger( "focus" );
}
});

function progress() {
var val = progressbar.progressbar( "value" ) || 0;

progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );

if ( val <= 99 ) {
  progressTimer = setTimeout( progress, 50 );
}
}

function closeDownload() {
clearTimeout( progressTimer );
dialog
  .dialog( "option", "buttons", dialogButtons )
  .dialog( "close" );
progressbar.progressbar( "value", false );
progressLabel
  .text( "Starting download..." );
downloadButton.trigger( "focus" );
}

// toggle
$( function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( "#effect" ).toggle( selectedEffect, options, 500 );
  };

  // Set effect from select menu value
  $( "#button" ).on( "click", function() {
    runEffect();
  });
} );

/* position */
$( function() {
  function position() {
    $( ".positionable" ).position({
      of: $( "#parent" ),
      my: $( "#my_horizontal" ).val() + " " + $( "#my_vertical" ).val(),
      at: $( "#at_horizontal" ).val() + " " + $( "#at_vertical" ).val(),
      collision: $( "#collision_horizontal" ).val() + " " + $( "#collision_vertical" ).val()
    });
  }

  $( ".positionable" ).css( "opacity", 0.5 );

  $( "select, input" ).on( "click keyup change", position );

  $( "#parent" ).draggable({
    drag: position
  });

  position();
} );

// Widget Factory
$( function() {
  // the widget definition, where "custom" is the namespace,
  // "colorize" the widget name
  $.widget( "custom.colorize", {
    // default options
    options: {
      red: 255,
      green: 0,
      blue: 0,

      // Callbacks
      change: null,
      random: null
    },

    // The constructor
    _create: function() {
      this.element
        // add a class for theming
        .addClass( "custom-colorize" );

      this.changer = $( "<button>", {
        text: "change",
        "class": "custom-colorize-changer"
      })
      .appendTo( this.element )
      .button();

      // Bind click events on the changer button to the random method
      this._on( this.changer, {
        // _on won't call random when widget is disabled
        click: "random"
      });
      this._refresh();
    },

    // Called when created, and later when changing options
    _refresh: function() {
      this.element.css( "background-color", "rgb(" +
        this.options.red +"," +
        this.options.green + "," +
        this.options.blue + ")"
      );

      // Trigger a callback/event
      this._trigger( "change" );
    },

    // A public method to change the color to a random value
    // can be called directly via .colorize( "random" )
    random: function( event ) {
      var colors = {
        red: Math.floor( Math.random() * 256 ),
        green: Math.floor( Math.random() * 256 ),
        blue: Math.floor( Math.random() * 256 )
      };

      // Trigger an event, check if it's canceled
      if ( this._trigger( "random", event, colors ) !== false ) {
        this.option( colors );
      }
    },

    // Events bound via _on are removed automatically
    // revert other modifications here
    _destroy: function() {
      // remove generated elements
      this.changer.remove();

      this.element
        .removeClass( "custom-colorize" )
        .enableSelection()
        .css( "background-color", "transparent" );
    },

    // _setOptions is called with a hash of all options that are changing
    // always refresh when changing options
    _setOptions: function() {
      // _super and _superApply handle keeping the right this-context
      this._superApply( arguments );
      this._refresh();
    },

    // _setOption is called for each individual option that is changing
    _setOption: function( key, value ) {
      // prevent invalid color values
      if ( /red|green|blue/.test(key) && (value < 0 || value > 255) ) {
        return;
      }
      this._super( key, value );
    }
  });

  // Initialize with default options
  $( "#my-widget1" ).colorize();

  // Initialize with two customized options
  $( "#my-widget2" ).colorize({
    red: 60,
    blue: 60
  });

  // Initialize with custom green value
  // and a random callback to allow only colors with enough green
  $( "#my-widget3" ).colorize( {
    green: 128,
    random: function( event, ui ) {
      return ui.green > 128;
    }
  });

  // Click to toggle enabled/disabled
  $( "#disable" ).on( "click", function() {
    // use the custom selector created for each widget to find all instances
    // all instances are toggled together, so we can check the state from the first
    if ( $( ":custom-colorize" ).colorize( "option", "disabled" ) ) {
      $( ":custom-colorize" ).colorize( "enable" );
    } else {
      $( ":custom-colorize" ).colorize( "disable" );
    }
  });

  // Click to set options after initialization
  $( "#green" ).on( "click", function() {
    $( ":custom-colorize" ).colorize( "option", {
      red: 64,
      green: 250,
      blue: 8
    });
  });
} );
});