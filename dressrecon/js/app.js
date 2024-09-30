
$(document).ready(function() {
    const results_modes = ["shape", "tracks", "gaussians", "rgb", "ref_rgb"];
    const results_groups = ["group0", "group1", "group2", "group3", "group4"];
    const sequences = [
        "0008_01", "0047_01", "0047_12", "0102_02", "0113_06",
        "0121_02", "0123_02", "0128_04", "0152_01", "0188_02",
    ];
    const extreme_sequences = [
        "0008_01", "0047_12", "0113_06", "0121_02",
        "0123_02", "0128_04", "0152_01", "0188_02",
    ];
    window.results_1_mode = "tracks";
    window.results_1_group = "group3";
    window.results_2_mode = "gaussians";
    window.results_2_group = "group2";
    window.baseline_comparison_seq = "0123_02";
    window.motion_decomposition_seq = "0008_01";
    window.extreme_view_synthesis_seq = "0121_02";

    // ===== Results (1): Sequence Selector (Mode)
    function get_onclick_results_1_mode(mode) {
        return function(e) {
            window.results_1_mode = mode;
            var group = window.results_1_group;
            document.getElementById("results_1").src = "./img/results/" + mode + "/" + group + ".mp4";
            for (var i = 0; i < results_modes.length; i++) {
                var other_mode = results_modes[i];
                document.getElementById("results_1_" + other_mode).className = "";
            }
            document.getElementById("results_1_" + mode).className = "selected-scene";
        };
    }

    for (var i = 0; i < results_modes.length; i++) {
        var mode = results_modes[i];
        document.getElementById("results_1_" + mode).addEventListener("click", get_onclick_results_1_mode(mode));
    }
    get_onclick_results_1_mode(window.results_1_mode)("");

    // ===== Results (1): Sequence Selector (Group)
    function get_onclick_results_1_group(group) {
        return function(e) {
            window.results_1_group = group;
            var mode = window.results_1_mode;
            document.getElementById("results_1").src = "./img/results/" + mode + "/" + group + ".mp4";
            for (var i = 0; i < results_groups.length; i++) {
                var other_group = results_groups[i];
                document.getElementById("results_1_" + other_group).className = "";
            }
            document.getElementById("results_1_" + group).className = "selected-scene";
        };
    }

    for (var i = 0; i < results_groups.length; i++) {
        var group = results_groups[i];
        document.getElementById("results_1_" + group).addEventListener("click", get_onclick_results_1_group(group));
    }
    get_onclick_results_1_group(window.results_1_group)("");

    // ===== Results (2): Sequence Selector (Mode)
    function get_onclick_results_2_mode(mode) {
        return function(e) {
            window.results_2_mode = mode;
            var group = window.results_2_group;
            document.getElementById("results_2").src = "./img/results/" + mode + "/" + group + ".mp4";
            for (var i = 0; i < results_modes.length; i++) {
                var other_mode = results_modes[i];
                document.getElementById("results_2_" + other_mode).className = "";
            }
            document.getElementById("results_2_" + mode).className = "selected-scene";
        };
    }

    for (var i = 0; i < results_modes.length; i++) {
        var mode = results_modes[i];
        document.getElementById("results_2_" + mode).addEventListener("click", get_onclick_results_2_mode(mode));
    }
    get_onclick_results_2_mode(window.results_2_mode)("");

    // ===== Results (2): Sequence Selector (Group)
    function get_onclick_results_2_group(group) {
        return function(e) {
            window.results_2_group = group;
            var mode = window.results_2_mode;
            document.getElementById("results_2").src = "./img/results/" + mode + "/" + group + ".mp4";
            for (var i = 0; i < results_groups.length; i++) {
                var other_group = results_groups[i];
                document.getElementById("results_2_" + other_group).className = "";
            }
            document.getElementById("results_2_" + group).className = "selected-scene";
        };
    }

    for (var i = 0; i < results_groups.length; i++) {
        var group = results_groups[i];
        document.getElementById("results_2_" + group).addEventListener("click", get_onclick_results_2_group(group));
    }
    get_onclick_results_2_group(window.results_2_group)("");

    // ===== Baseline Comparison: Sequence Selector
    function get_onclick_baseline_comparison(seq) {
        return function(e) {
            window.baseline_comparison_seq = seq;
            document.getElementById("baseline_comparison").src = "./img/baseline_comparison/" + seq + ".mp4";
            for (var i = 0; i < sequences.length; i++) {
                var other_seq = sequences[i];
                document.getElementById("baseline_comparison_" + other_seq).className = "";
            }
            document.getElementById("baseline_comparison_" + seq).className = "selected-scene";
        };
    }

    for (var i = 0; i < sequences.length; i++) {
        var seq = sequences[i];
        document.getElementById("baseline_comparison_" + seq).addEventListener("click", get_onclick_baseline_comparison(seq));
    }
    get_onclick_baseline_comparison(window.baseline_comparison_seq)("");

    // ===== Motion Decomposition: Sequence Selector
    function get_onclick_motion_decomposition(seq) {
        return function(e) {
            window.motion_decomposition_seq = seq;
            document.getElementById("motion_decomposition").src = "./img/motion_decomposition/" + seq + ".mp4";
            for (var i = 0; i < sequences.length; i++) {
                var other_seq = sequences[i];
                document.getElementById("motion_decomposition_" + other_seq).className = "";
            }
            document.getElementById("motion_decomposition_" + seq).className = "selected-scene";
        };
    }

    for (var i = 0; i < sequences.length; i++) {
        var seq = sequences[i];
        document.getElementById("motion_decomposition_" + seq).addEventListener("click", get_onclick_motion_decomposition(seq));
    }
    get_onclick_motion_decomposition(window.motion_decomposition_seq)("");

    // ===== Extreme View Synthesis: Sequence Selector
    function get_onclick_extreme_view_synthesis(seq) {
        return function(e) {
            window.extreme_view_synthesis_seq = seq;
            document.getElementById("extreme_view_synthesis").src = "./img/extreme_view_synthesis/" + seq + ".mp4";
            for (var i = 0; i < extreme_sequences.length; i++) {
                var other_seq = extreme_sequences[i];
                document.getElementById("extreme_view_synthesis_" + other_seq).className = "";
            }
            document.getElementById("extreme_view_synthesis_" + seq).className = "selected-scene";
        };
    }

    for (var i = 0; i < extreme_sequences.length; i++) {
        var seq = extreme_sequences[i];
        document.getElementById("extreme_view_synthesis_" + seq).addEventListener("click", get_onclick_extreme_view_synthesis(seq));
    }
    get_onclick_extreme_view_synthesis(window.extreme_view_synthesis_seq)("");

});
