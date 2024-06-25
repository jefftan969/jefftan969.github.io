
$(document).ready(function() {
    const sequences = [
        "0008_01", "0047_01", "0047_12", "0102_02", "0113_06", "0121_02", "0123_02",
        "0128_04", "0133_07", "0152_01", "0166_04", "0188_02", "0206_04", "0239_01",
    ];

    // ===== Baseline Comparison
    function get_onclick_baseline_comp(seq) {
        return function(e) {
            document.getElementById("baseline_comp_video").src = "./img/baseline_comp/" + seq + ".mp4";
            for (var i = 0; i < sequences.length; i++) {
                other_seq = sequences[i];
                document.getElementById("baseline_comp_" + other_seq).className = "";
            }
            document.getElementById("baseline_comp_" + seq).className = "selected-scene";
        };
    }

    for (var i = 0; i < sequences.length; i++) {
        seq = sequences[i];
        document.getElementById("baseline_comp_" + seq).addEventListener("click", get_onclick_baseline_comp(seq));
    }
    get_onclick_baseline_comp("0123_02")("");

    // ===== Gaussian Visualization
    function get_onclick_deform_vis(seq) {
        return function(e) {
            document.getElementById("deform_vis_video").src = "./img/deform_vis/" + seq + ".mp4";
            for (var i = 0; i < sequences.length; i++) {
                other_seq = sequences[i];
                document.getElementById("deform_vis_" + other_seq).className = "";
            }
            document.getElementById("deform_vis_" + seq).className = "selected-scene";
        };
    }

    for (var i = 0; i < sequences.length; i++) {
        seq = sequences[i];
        document.getElementById("deform_vis_" + seq).addEventListener("click", get_onclick_deform_vis(seq));
    }
    get_onclick_deform_vis("0008_01")("");
});
