global class ScheduleJob implements Schedulable {

    global void execute(SchedulableContext SC){
        System.debug('Inserted !');
    }
}