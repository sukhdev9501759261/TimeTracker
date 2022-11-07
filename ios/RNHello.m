//
//  RNHello.m
//  latestSeedProject
//
//  Created by MAC2 on 22/07/22.
//

// RCTCalendarModule.m
#import <React/RCTLog.h>
#import "RNHello.h"

@implementation RNHello

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  callback(@[@"Hello from native ios"]);
}

@end

