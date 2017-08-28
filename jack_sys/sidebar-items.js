initSidebarItems({"constant":[["JackAudioVideoRatio",""],["JackBBTFrameOffset",""],["JackBackendError",""],["JackCaptureLatency",""],["JackClientZombie",""],["JackFailure",""],["JackInitFailure",""],["JackInvalidOption",""],["JackLoadFailure",""],["JackLoadInit",""],["JackLoadName",""],["JackMaster",""],["JackNameNotUnique",""],["JackNoStartServer",""],["JackNoSuchClient",""],["JackNullOption",""],["JackParamBool",""],["JackParamChar",""],["JackParamInt",""],["JackParamString",""],["JackParamUInt",""],["JackPlaybackLatency",""],["JackPortCanMonitor",""],["JackPortIsInput",""],["JackPortIsOutput",""],["JackPortIsPhysical",""],["JackPortIsTerminal",""],["JackPositionBBT",""],["JackPositionTimecode",""],["JackServerError",""],["JackServerFailed",""],["JackServerName",""],["JackServerStarted",""],["JackSessionID",""],["JackSessionNeedTerminal",""],["JackSessionSave",""],["JackSessionSaveAndQuit",""],["JackSessionSaveError",""],["JackSessionSaveTemplate",""],["JackShmFailure",""],["JackSlave",""],["JackTransportBBT",""],["JackTransportLoop",""],["JackTransportLooping",""],["JackTransportNetStarting",""],["JackTransportPosition",""],["JackTransportRolling",""],["JackTransportSMPTE",""],["JackTransportStarting",""],["JackTransportState",""],["JackTransportStopped",""],["JackUseExactName",""],["JackVersionError",""],["JackVideoFrameOffset",""],["PropertyChanged",""],["PropertyCreated",""],["PropertyDeleted",""]],"enum":[["Struct__jack_client",""],["Struct__jack_port",""],["Struct_jackctl_driver",""],["Struct_jackctl_internal",""],["Struct_jackctl_parameter",""],["Struct_jackctl_server",""],["Struct_jackctl_sigmask",""]],"fn":[["jack_acquire_real_time_scheduling",""],["jack_activate",""],["jack_client_close",""],["jack_client_create_thread",""],["jack_client_get_uuid",""],["jack_client_has_session_callback",""],["jack_client_kill_thread",""],["jack_client_max_real_time_priority",""],["jack_client_name_size",""],["jack_client_new",""],["jack_client_open",""],["jack_client_real_time_priority",""],["jack_client_stop_thread",""],["jack_client_thread_id",""],["jack_connect",""],["jack_cpu_load",""],["jack_cycle_signal",""],["jack_cycle_wait",""],["jack_deactivate",""],["jack_disconnect",""],["jack_drop_real_time_scheduling",""],["jack_engine_takeover_timebase",""],["jack_error",""],["jack_frame_time",""],["jack_frames_since_cycle_start",""],["jack_frames_to_time",""],["jack_free",""],["jack_free_description",""],["jack_get_all_properties",""],["jack_get_buffer_size",""],["jack_get_client_name",""],["jack_get_client_name_by_uuid",""],["jack_get_client_pid",""],["jack_get_current_transport_frame",""],["jack_get_internal_client_name",""],["jack_get_max_delayed_usecs",""],["jack_get_ports",""],["jack_get_properties",""],["jack_get_property",""],["jack_get_sample_rate",""],["jack_get_time",""],["jack_get_transport_info",""],["jack_get_uuid_for_client_name",""],["jack_get_version",""],["jack_get_version_string",""],["jack_get_xrun_delayed_usecs",""],["jack_info",""],["jack_internal_client_close",""],["jack_internal_client_handle",""],["jack_internal_client_load",""],["jack_internal_client_new",""],["jack_internal_client_unload",""],["jack_is_realtime",""],["jack_last_frame_time",""],["jack_log",""],["jack_midi_clear_buffer",""],["jack_midi_event_get",""],["jack_midi_event_reserve",""],["jack_midi_event_write",""],["jack_midi_get_event_count",""],["jack_midi_get_lost_event_count",""],["jack_midi_max_event_size",""],["jack_midi_reset_buffer",""],["jack_on_info_shutdown",""],["jack_on_shutdown",""],["jack_port_by_id",""],["jack_port_by_name",""],["jack_port_connected",""],["jack_port_connected_to",""],["jack_port_disconnect",""],["jack_port_ensure_monitor",""],["jack_port_flags",""],["jack_port_get_aliases",""],["jack_port_get_all_connections",""],["jack_port_get_buffer",""],["jack_port_get_connections",""],["jack_port_get_latency",""],["jack_port_get_latency_range",""],["jack_port_get_total_latency",""],["jack_port_is_mine",""],["jack_port_monitoring_input",""],["jack_port_name",""],["jack_port_name_size",""],["jack_port_register",""],["jack_port_request_monitor",""],["jack_port_request_monitor_by_name",""],["jack_port_set_alias",""],["jack_port_set_latency",""],["jack_port_set_latency_range",""],["jack_port_set_name",""],["jack_port_short_name",""],["jack_port_tie",""],["jack_port_type",""],["jack_port_type_get_buffer_size",""],["jack_port_type_id",""],["jack_port_type_size",""],["jack_port_unregister",""],["jack_port_unset_alias",""],["jack_port_untie",""],["jack_port_uuid",""],["jack_recompute_total_latencies",""],["jack_recompute_total_latency",""],["jack_release_timebase",""],["jack_remove_all_properties",""],["jack_remove_properties",""],["jack_remove_property",""],["jack_reserve_client_name",""],["jack_reset_max_delayed_usecs",""],["jack_ringbuffer_create",""],["jack_ringbuffer_free",""],["jack_ringbuffer_get_read_vector",""],["jack_ringbuffer_get_write_vector",""],["jack_ringbuffer_mlock",""],["jack_ringbuffer_peek",""],["jack_ringbuffer_read",""],["jack_ringbuffer_read_advance",""],["jack_ringbuffer_read_space",""],["jack_ringbuffer_reset",""],["jack_ringbuffer_reset_size",""],["jack_ringbuffer_write",""],["jack_ringbuffer_write_advance",""],["jack_ringbuffer_write_space",""],["jack_session_commands_free",""],["jack_session_event_free",""],["jack_session_notify",""],["jack_session_reply",""],["jack_set_buffer_size",""],["jack_set_buffer_size_callback",""],["jack_set_client_registration_callback",""],["jack_set_error_function",""],["jack_set_freewheel",""],["jack_set_freewheel_callback",""],["jack_set_graph_order_callback",""],["jack_set_info_function",""],["jack_set_latency_callback",""],["jack_set_port_connect_callback",""],["jack_set_port_registration_callback",""],["jack_set_port_rename_callback",""],["jack_set_process_callback",""],["jack_set_process_thread",""],["jack_set_property",""],["jack_set_property_change_callback",""],["jack_set_sample_rate_callback",""],["jack_set_session_callback",""],["jack_set_sync_callback",""],["jack_set_sync_timeout",""],["jack_set_thread_creator",""],["jack_set_thread_init_callback",""],["jack_set_timebase_callback",""],["jack_set_transport_info",""],["jack_set_xrun_callback",""],["jack_thread_wait",""],["jack_time_to_frames",""],["jack_transport_locate",""],["jack_transport_query",""],["jack_transport_reposition",""],["jack_transport_start",""],["jack_transport_stop",""],["jackctl_driver_get_name",""],["jackctl_driver_get_parameters",""],["jackctl_driver_get_type",""],["jackctl_driver_params_parse",""],["jackctl_internal_get_name",""],["jackctl_internal_get_parameters",""],["jackctl_parameter_constraint_is_fake_value",""],["jackctl_parameter_constraint_is_strict",""],["jackctl_parameter_get_default_value",""],["jackctl_parameter_get_enum_constraint_description",""],["jackctl_parameter_get_enum_constraint_value",""],["jackctl_parameter_get_enum_constraints_count",""],["jackctl_parameter_get_id",""],["jackctl_parameter_get_long_description",""],["jackctl_parameter_get_name",""],["jackctl_parameter_get_range_constraint",""],["jackctl_parameter_get_short_description",""],["jackctl_parameter_get_type",""],["jackctl_parameter_get_value",""],["jackctl_parameter_has_enum_constraint",""],["jackctl_parameter_has_range_constraint",""],["jackctl_parameter_is_set",""],["jackctl_parameter_reset",""],["jackctl_parameter_set_value",""],["jackctl_server_add_slave",""],["jackctl_server_close",""],["jackctl_server_create",""],["jackctl_server_destroy",""],["jackctl_server_get_drivers_list",""],["jackctl_server_get_internals_list",""],["jackctl_server_get_parameters",""],["jackctl_server_load_internal",""],["jackctl_server_open",""],["jackctl_server_remove_slave",""],["jackctl_server_start",""],["jackctl_server_stop",""],["jackctl_server_switch_master",""],["jackctl_server_unload_internal",""],["jackctl_setup_signals",""],["jackctl_wait_signals",""]],"static":[["FLOAT_MONO_AUDIO","JACK port type for 32 bit float mono audio"],["JACK_METADATA_CONNECTED",""],["JACK_METADATA_HARDWARE",""],["JACK_METADATA_ICON_LARGE",""],["JACK_METADATA_ICON_SMALL",""],["JACK_METADATA_PORT_GROUP",""],["JACK_METADATA_PRETTY_NAME",""],["RAW_MIDI_TYPE","JACK port type for 8 bit raw midi"],["jack_error_callback",""],["jack_info_callback",""]],"struct":[["Struct_Unnamed11",""],["Struct_Unnamed12",""],["Struct_Unnamed4",""],["Struct_Unnamed5",""],["Struct_Unnamed8",""],["Struct_Unnamed9",""],["Struct__JSList",""],["Struct__jack_latency_range",""],["Struct__jack_midi_event",""],["Struct__jack_position",""],["Struct__jack_session_event",""],["Union_jackctl_parameter_value",""],["jack_get_cycle_times",""]],"type":[["Enum_JackLatencyCallbackMode",""],["Enum_JackOptions",""],["Enum_JackPortFlags",""],["Enum_JackSessionEventType",""],["Enum_JackSessionFlags",""],["Enum_JackStatus",""],["Enum_Unnamed1",""],["Enum_Unnamed10",""],["Enum_Unnamed2",""],["Enum_Unnamed3",""],["Enum_Unnamed6",""],["Enum_Unnamed7",""],["JCompareFunc",""],["JSList",""],["JackBufferSizeCallback",""],["JackClientRegistrationCallback",""],["JackFreewheelCallback",""],["JackGraphOrderCallback",""],["JackInfoShutdownCallback",""],["JackLatencyCallback",""],["JackPortConnectCallback",""],["JackPortRegistrationCallback",""],["JackPortRenameCallback",""],["JackProcessCallback",""],["JackPropertyChangeCallback",""],["JackSampleRateCallback",""],["JackSessionCallback",""],["JackShutdownCallback",""],["JackSyncCallback",""],["JackThreadCallback",""],["JackThreadInitCallback",""],["JackTimebaseCallback",""],["JackXRunCallback",""],["jack_client_t",""],["jack_default_audio_sample_t",""],["jack_description_t",""],["jack_intclient_t",""],["jack_latency_callback_mode_t",""],["jack_latency_range_t",""],["jack_midi_data_t",""],["jack_midi_event_t",""],["jack_native_thread_t",""],["jack_nframes_t",""],["jack_options_t",""],["jack_port_id_t",""],["jack_port_t",""],["jack_port_type_id_t",""],["jack_position_bits_t",""],["jack_position_t",""],["jack_property_change_t",""],["jack_property_t",""],["jack_ringbuffer_data_t",""],["jack_ringbuffer_t",""],["jack_session_command_t",""],["jack_session_event_t",""],["jack_session_event_type_t",""],["jack_session_flags_t",""],["jack_shmsize_t",""],["jack_status_t",""],["jack_thread_creator_t",""],["jack_time_t",""],["jack_transport_bits_t",""],["jack_transport_info_t",""],["jack_transport_state_t",""],["jack_unique_t",""],["jack_uuid_t",""],["jackctl_driver_t",""],["jackctl_driver_type_t",""],["jackctl_internal_t",""],["jackctl_param_type_t",""],["jackctl_parameter_t",""],["jackctl_server_t",""],["jackctl_sigmask_t",""]]});