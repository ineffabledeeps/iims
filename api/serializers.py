from datetime import date
from distutils.command.clean import clean
from matplotlib.style import available
from rest_framework import serializers
from model_name.models import classroom, faculties, timetable
from datetime import datetime
import calendar


class ClassroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = classroom
        fields = ('room_no', 'status', 'course_id', 'capacity', 'projector',
                  'ac', 'computer', 'desks', 'whiteboard', 'count', 'type')



class FacultySerializer(serializers.ModelSerializer):
    available = serializers.SerializerMethodField('avail')

    def avail(self,obj):
        return True
    class Meta:
        model = faculties
        fields=('fac_id','fac_name','dept_id','fac_role','fac_cab_no','available')



class TimetableSerializer(serializers.ModelSerializer):
    more_details = serializers.SerializerMethodField('room_da')
    subject = serializers.SerializerMethodField('get_subject')


    global now 
    now= datetime.now()
    #current_time=now.strftime("%H:%M")
    global day
    day=calendar.day_name[now.weekday()].lower()


    class Meta:
        model = timetable
        fields = ('time','subject','dept_id_id','more_details')

    def get_subject(self,obj):
        subject = timetable.objects.all().filter(time=obj.time).filter(details="subject")
        return(subject.values(day)[0][day])

    def room_da(self, obj):
        room_query = timetable.objects.all().filter(time=obj.time).filter(details="room")
        room_no=room_query.values(day)[0][day]
        faculty = timetable.objects.all().filter(time=obj.time).filter(details="teacher")
        room=classroom.objects.all().filter(room_no=room_no)
        return ({'room':room.values()[0],'faculty':faculty.values(day)[0][day]})
        # ,'throwing_it_out':room_query.values(day)[0][day]})
        # ,'dept':obj.dept_id_id})
        # ,'time' :obj.batch_id_id})
        # 'ishh':now.weekday(),'day':calendar.day_name[now.weekday()]})


# class Serializer(serializers.ModelSerializer):
#     class Meta:
#         model = dept
#         fields = ('dept_id','dept_name')
#         # check if var time matches office hrs 
#         # faculty_name = 
#         # faculty_email = 
#         # cabin_no = 
#         # time 
