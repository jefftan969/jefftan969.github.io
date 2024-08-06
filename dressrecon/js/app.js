
$(document).ready(function() {
    const sequences = [
        "0008_01", "0047_01", "0047_12", "0102_02", "0113_06", "0121_02", "0123_02",
        "0128_04", "0133_07", "0152_01", "0166_04", "0188_02", "0206_04", "0239_01",
    ];
    window.baseline_comp_seq = "0123_02";
    window.deform_vis_seq = "0008_01";

    const views = ["deg0", "deg-90", "deg90"];
    window.baseline_comp_view = "deg0";
    window.deform_vis_view = "deg0";

    // ===== Baseline Comparison: Sequence Selector
    function get_onclick_baseline_comp_seq(seq) {
        return function(e) {
            window.baseline_comp_seq = seq;
            var view = window.baseline_comp_view;
            document.getElementById("baseline_comp_video").src = "./img/baseline_comp/" + view + "/" + seq + ".mp4";
            for (var i = 0; i < sequences.length; i++) {
                var other_seq = sequences[i];
                document.getElementById("baseline_comp_" + other_seq).className = "";
            }
            document.getElementById("baseline_comp_" + seq).className = "selected-scene";
        };
    }

    for (var i = 0; i < sequences.length; i++) {
        var seq = sequences[i];
        document.getElementById("baseline_comp_" + seq).addEventListener("click", get_onclick_baseline_comp_seq(seq));
    }
    get_onclick_baseline_comp_seq(window.baseline_comp_seq)("");

    // ===== Baseline Comparison: View Selector
    function get_onclick_baseline_comp_view(view) {
        return function(e) {
            window.baseline_comp_view = view;
            var seq = window.baseline_comp_seq;
            document.getElementById("baseline_comp_video").src = "./img/baseline_comp/" + view + "/" + seq + ".mp4";
            for (var i = 0; i < views.length; i++) {
                var other_view = views[i];
                document.getElementById("baseline_comp_" + other_view).className = "";
            }
            document.getElementById("baseline_comp_" + view).className = "selected-scene";
        };
    }

    for (var i = 0; i < views.length; i++) {
        var view = views[i];
        document.getElementById("baseline_comp_" + view).addEventListener("click", get_onclick_baseline_comp_view(view));
    }
    get_onclick_baseline_comp_view(window.baseline_comp_view)("");

    // ===== Deformation Visualization: Sequence Selector
    function get_onclick_deform_vis_seq(seq) {
        return function(e) {
            window.deform_vis_seq = seq;
            var view = window.deform_vis_view;
            document.getElementById("deform_vis_video").src = "./img/deform_vis/" + view + "/" + seq + ".mp4";
            for (var i = 0; i < sequences.length; i++) {
                var other_seq = sequences[i];
                document.getElementById("deform_vis_" + other_seq).className = "";
            }
            document.getElementById("deform_vis_" + seq).className = "selected-scene";
        };
    }

    for (var i = 0; i < sequences.length; i++) {
        var seq = sequences[i];
        document.getElementById("deform_vis_" + seq).addEventListener("click", get_onclick_deform_vis_seq(seq));
    }
    get_onclick_deform_vis_seq(window.deform_vis_seq)("");

    // ===== Gaussian Visualization: View Selector
    function get_onclick_deform_vis_view(view) {
        return function(e) {
            window.deform_vis_view = view;
            var seq = window.deform_vis_seq;
            document.getElementById("deform_vis_video").src = "./img/deform_vis/" + view + "/" + seq + ".mp4";
            for (var i = 0; i < views.length; i++) {
                var other_view = views[i];
                document.getElementById("deform_vis_" + other_view).className = "";
            }
            document.getElementById("deform_vis_" + view).className = "selected-scene";
        };
    }

    for (var i = 0; i < views.length; i++) {
        var view = views[i];
        document.getElementById("deform_vis_" + view).addEventListener("click", get_onclick_deform_vis_view(view));
    }
    get_onclick_deform_vis_view(window.deform_vis_view)("");
});
